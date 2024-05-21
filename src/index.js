// 导入 React 库，这是创建 React 组件的基础
import React from "react";

// 导入 ReactDOM 库的 client 部分，这个库提供了 DOM 相关的功能
import ReactDOM from "react-dom/client";
import "./index.css";

// pizza数据集
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// 定义一个名为 App 的函数组件，这个组件返回一个 h1 元素，元素中的文本是 "Hello, React!"
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSiza: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fan's Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Pizza</h2>

      {numPizza > 0 ? (
        <>
          <p>Authentic, Delicious, Organic</p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        "We're still working on our menu. Please wait for a while..."
      )}
    </main>
  );
}

// 解构props
function Pizza({ pizzaObj }) {
  //如果卖完了
  // if (pizzaObj.soldOut) {
  //   return (
  //     <li className="pizza sold-out">
  //       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
  //       <div>
  //         <h3>{pizzaObj.name}</h3>
  //         <p>Sold Out.</p>
  //         <span>${pizzaObj.price + 5}</span>
  //       </div>
  //     </li>
  //   );
  // }

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* 只要图片位于public文件夹或其子文件夹中，就可以通过相对路径访问到。 */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "SOLD OUT" : "$" + (pizzaObj.price + 5)}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  // 参数：元素类型 属性 子元素
  // return React.createElement("footer", null, "We're currently open!");

  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // const sign = isOpen
  //   ? `We're open until ${closeHour}:00. Come visit or order online!`
  //   : `Sorry, we're currently closed!
  //   We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`;

  // JSX
  // return (
  //   <footer className="footer">
  //     <div className="order">
  //       <p>{sign}</p>
  //       <button className="btn">Order</button>
  //     </div>
  //   </footer>
  // );
  return (
    <FooterContent isOpen={isOpen} closeHour={closeHour} openHour={openHour} />
  );
}

function FooterContent({ isOpen, closeHour, openHour }) {
  const sign = isOpen
    ? `We're open until ${closeHour}:00. Come visit or order online!`
    : `Sorry, we're currently closed! 
    We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`;

  return (
    <footer className="footer">
      <div className="order">
        <p>{sign}</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

// 使用 document.getElementById("root") 获取页面上 id 为 "root" 的元素
// 然后使用 ReactDOM.createRoot 创建一个 React 根节点
const root = ReactDOM.createRoot(document.getElementById("root"));

// 使用 root.render 方法将 App 组件渲染到根节点
// 这会导致 "Hello, React!" 被渲染到页面上 id 为 "root" 的元素中
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * React.StrictMode 是一个用于突出显示应用程序中潜在问题的工具。
 * 它不会渲染任何可见的 UI，也不会影响生产构建。在开发模式下，它会帮助你检查过时的和潜在的问题。
 * 例如，React.StrictMode 可以帮助你检测以下问题：
 * 不安全的生命周期方法
 * 意外的副作用
 * 过时的 ref API
 * 废弃的字符串 ref
 * 直接调用 DOM
 * 弃用的 findDOMNode 方法
 * 检测意外的公共 API 使用
 */
