import { showNotification } from "./uiSlice";
import { replaceCart } from "./cartSlice";

export const fetchCartData = () => {
   return async (dispatch) => {
      const fetchData = async () => {
         const res = await fetch('https://redux-app-9a7f5-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
         if (!res.ok) {
            throw new Error('Could not fetch cart data!');
         }
         const data = await res.json();

         return data;
      };

      try {
         const cartData = await fetchData();
         dispatch(replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity
         }));
      } catch (err) {
         dispatch(showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching cart data failed.',
         }))
      }
   }
}

export const sendCartData = (cartData) => {
   return async (dispatch) => {
      dispatch(showNotification({
         status: 'pending',
         title: 'Sending...',
         message: 'Sending cart data!',
      }))

      const sendRequest = async () => {
         const res = await fetch('https://redux-app-9a7f5-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
            method: 'PUT',
            body: JSON.stringify(cartData),
            header: {
               'Content-Type': 'application/json'
            }
         });
         if (!res.ok) {
            throw new Error('Sending cart data failed.');
         }
      };
      try {
         await sendRequest();

         dispatch(showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
         }))
      } catch (err) {
         dispatch(showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed.',
         }))
      }
   };
}