import Product from "../models/product.js";

const getAllProducts = async(req,res) =>{

     const {company,name,featured,sort,select} = req.query;
     const queryObject = {};

     if(company){
          queryObject.company = company;
          console.log(queryObject.company);
     }

     if(name){
          queryObject.name = {$regex:name,$options:"i"};
          console.log(queryObject.name);
     }

     let apiData = Product.find(queryObject);

     if(sort){
          // let sortFix = sort.replace(","," ");
          let sortFix = sort.split(",").join(" ")
          apiData = apiData.sort(sortFix)
     }

     if(select){
          // let selectFix = select.replace(","," ")
          let selectFix = select.split(",").join(" ")
          apiData = apiData.select(selectFix)
     }

     if(featured){
          queryObject.featured = featured
     }


     let page = Number(req.query.page) || 1;
     let limit = Number(req.query.limit) || 2;

     let skip = (page-1) * limit;

     // page = 2
     // limit = 2
     // skip = (2-1)*2 
     // It means it will skip first two data on page 2 and show next 2

     apiData = apiData.skip(skip).limit(limit);
     console.log(queryObject);

     const myData = await apiData;
     res.status(200).json({myData,nbHits:myData.length});
}  ;

 const  getAllProductsTesting = async(req, res) => {
     const myData = await Product.find(req.query).sort("-price")
     res.status(200).json(myData);
}  

export  { getAllProducts , getAllProductsTesting }
// module.exports = {getAllProducts,getAllProductsTesting}