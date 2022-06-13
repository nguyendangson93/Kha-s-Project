import { useEffect, useState } from 'react';
import headphone1Image from '../../assets/headphone1.jpg';
import headphone2Image from '../../assets/headphone2.jpg';
import laptop1Image from '../../assets/laptop1.jpg';
import laptop2Image from '../../assets/laptop2.jpg';
//import mealsImage from '../../assets/meals.jpg'
import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';

  const DUMMY_PRODUCTS = [
    {
      id: "m1",
      name: "Laptop Asus Gaming",
      description: "Asus ROG Strix G15 G513IH-HN015TW là chiếc laptop có cấu hình mạnh mẽ, đáp ứng được hầu hết các tựa game trên thị trường hiện nay. Ngay cả khi hoạt động trong nhiều giờ liền máy vẫn khá mát mẻ do có hệ thống tản nhiệt cao cấp. Nếu bạn là một game thủ hay người dùng muốn tìm máy có cấu hình cao thì đừng bỏ qua chiếc laptop Asus chất lượng này.",
      price: 23,
      img:laptop1Image,
    },
    {
      id: "m2",
      name: "Laptop MSI",
      description: "MSI Gaming GF63 Thin 10SC 481VN là chiếc laptop gaming rất đáng mua ở phân khúc 20 triệu đồng khi vừa nhỏ gọn di động, lại vừa trang bị bộ vi xử lý Intel Core i7 10750H siêu mạnh, đi cùng card đồ họa rời GTX 1650 chuyên game.",
      price: 16,
      img:laptop2Image,
    },
    {
      id: "m3",
      name: "Tai nghe JBL QUANTUM 400",
      description: "Sự ra mắt một chuỗi seri tai nghe gaming đến từ hãng JBL, đã làm mưa làm gió trên thị trường tai nghe hiện nay, tạo nên một sự cạnh tranh cực kì mạnh mẽ giữa những chiếc tai nghe gaming trong cùng phân khúc giá. Vì những sản phẩm mà JBL mang tới đều là những sản phẩm cực kì chất lượng về mặt thiết kế cũng như mặt âm thanh dành đến cho game thủ chuyên nghiệp",
      price: 13,
      img:headphone1Image,
    },
    {
      id: "m4",
      name: "iClever BTH03 Kids Headphones",
      description: "Colorful LED Lights Kids Bluetooth Headphones with MIC, 25H Playtime, Stereo Sound, Bluetooth 5.0, Foldable, Childrens Headphones on Ear for Study Tablet Airplane, Blue",
      price: 19,
      img:headphone2Image ,
    },
  ];
  
  const AvailableProducts = () => {
    const productsList = DUMMY_PRODUCTS.map((pro) => (
      <ProductItem
        id={pro.id}
        key={pro.id}
        name={pro.name}
        description={pro.description}
        price={pro.price}
        img={pro.img}
      />
    ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;



// const AvailableMeals = () => {
//   const [meals, setMeals] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [httpError, setHttpError] = useState();

//   useEffect(() => {
//     const fetchMeals = async () => {
//       const response = await fetch(
//         'https://react-app-3f5bd-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
//       );

//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const responseData = await response.json();

//       const loadedMeals = [];

//       for (const key in responseData) {
//         loadedMeals.push({
//           id: key,
//           name: responseData[key].name,
//           description: responseData[key].description,
//           price: responseData[key].price,
//         });
//       }

//       setMeals(loadedMeals);
//       setIsLoading(false);
//     };

//     fetchMeals().catch((error) => {
//       setIsLoading(false);
//       setHttpError(error.message);
//     });
//   }, []);

//   if (isLoading) {
//     return (
//       <section className={classes.MealsLoading}>
//         <p>Loading...</p>
//       </section>
//     );
//   }

//   if (httpError) {
//     return (
//       <section className={classes.MealsError}>
//         <p>{httpError}</p>
//       </section>
//     );
//   }

//   const mealsList = meals.map((meal) => (
//     <MealItem
//       key={meal.id}
//       id={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />
//   ));