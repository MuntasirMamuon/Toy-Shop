import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tab1 from "./Tab1/Tab1";
import Tab2 from "./Tab2/Tab2";
import Tab3 from "./Tab3/Tab3";
const Category = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [categoriesTab1,setCategoriesTab1]=useState([])
  const [categoriesTab2,setCategoriesTab2]=useState([])
  const [categoriesTab3,setCategoriesTab3]=useState([])

  useEffect(()=>{
    fetch(`https://toy-shop-server-gray.vercel.app/toy`)
    .then(res=>res.json())
    .then(data=>{
  
      const categoryToyTab1=data.filter(data=>data.categoryToy==="Bat and Ball Toys")
      const categoryToyTab2=data.filter(data=>data.categoryToy==="Outdoor Sports Toys")
      const categoryToyTab3=data.filter(data=>data.categoryToy==="Target Sports Toys")
        setCategoriesTab1(categoryToyTab1);
        setCategoriesTab2(categoryToyTab2);
        setCategoriesTab3(categoryToyTab3);
    })
  },[])
  
  const handleTabChange = (index) => {
    setActiveTab(index);


  
  };

  
  return (
  <div className="mb-10">
    <h1 className="text-5xl text-center mt-10 font-bold">Category Section</h1>
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
      <TabList className="text-center mt-10">
       
        <Tab >Bat and Ball Toys</Tab>
        <Tab >Outdoor Sports Toys</Tab>
        <Tab >Target Sports Toys</Tab>
      </TabList>

      <TabPanel >
        
           <div className="grid grid-cols-1  lg:grid-cols-3">
           {
            categoriesTab1.map(category=><Tab1 key={category._id} category={category}></Tab1>)
           }
           </div>
      </TabPanel>

      <TabPanel >
       <div className="grid grid-cols-1  lg:grid-cols-3">
       {
            categoriesTab2.map(category=><Tab2 key={category._id} category={category}></Tab2>)
          }
       </div>
          

      </TabPanel>

      <TabPanel >
        
      <div className="grid grid-cols-1  lg:grid-cols-3">
      {
            categoriesTab3.map(category=><Tab3 key={category._id} category={category}></Tab3>)
          }
      </div>

      </TabPanel>
    </Tabs>
  </div>
  );
};

export default Category;
