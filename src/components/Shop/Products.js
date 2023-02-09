import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const PRODUCTS = [
    {
      id: 1,
      title: 'Fleece Jogger Pajama Pants',
      price: 20,
      description: 'Take it easy around the house (or even out and about) in these exceptionally soft, athletically inspired jogger pants from Stafford. classic fit elastic waist with drawstring closed bottom cotton/polyester washable imported'
    },
    {
      id: 2,
      title: 'Stir Up Mens Running Shoes',
      price: 84,
      description: 'Shake up the trail in our lightweight running shoes that provide extra comfort and cushioning to keep you on the road. technology EVA midsole provides cushioning and comfort'
    },
    {
      id: 3,
      title: 'Quick-Dri Performance Bootcut Pant',
      price: 50,
      description: "Whether you're working out or running—or heading to the coffee shop afterwards—our regular rise, slim-fit, bootcut pants will keep you comfortable. tight compression fit provides added comfort during workouts"
    }
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
