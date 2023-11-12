import React, { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert'



export default function AddProduct() {

  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  const [productInfo, setProductInfo] = useState({
    productImage: '',
    sku: '',
    productName: '',
    short_description: '',
    long_description: '',
    price: '',
    discount_price: '',
    quantity: '',
    subcategory_id: '',
    
  });

  const notify = () => swal(
    {
      title: 'Product added successfully',
      icon: 'success',
      button: 'close',
      className: 'alert',
    }
  );

  const handleSubmitAddProduct = async () => {
    
    const formData = new FormData();
    formData.append('product_name', productInfo.productName);
    formData.append('product_image', productInfo.productImage);
    formData.append('sku', productInfo.sku);
    formData.append('short_description', productInfo.short_description);
    formData.append('long_description', productInfo.long_description);
    formData.append('price', productInfo.price);
    formData.append('discount_price', productInfo.discount_price);
    formData.append('quantity', productInfo.quantity);
    formData.append('subcategory_id', productInfo.subcategory_id);
  
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }
      const response = await axios.post('http://localhost:3001/products', formData, config);
  
      console.log(response.data);
      notify();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  
return (
  
  <div className="p-4 ml-10 overflow-auto h-[500px] bg-white rounded-t-3xl rounded-lg" style={{width:'92%'}}>
    
  <p className="titleAdd-product text-cyan-500 mb-4 text-2xl font-bold">Add Product</p>
  <p className="sub-titleAdd-product text-gray-900 mb-4 ">Please make sure all information is correct before submitting them.</p>
  <table className="w-4/4">
    <tbody>
      <tr>
        <td className="w-1/4">
          <label className="block font-bold text-gray-700 text-sm mb-2 pl-8" htmlFor="productName">
            Name
          </label>
        </td>
        <td className="w-1/4">
          <input
            className="w-full px-3 py-2   border rounded-lg focus:border"
            type="text"
            name="productName"
            id="productName"
            placeholder={productInfo && productInfo.productName}
            value={productInfo.productName}
            onChange={(e) => setProductInfo({ ...productInfo, productName: e.target.value })}
            required
          />
        </td>
        <td className='w-1/4'>
          <label className="block font-bold text-gray-700 text-sm mb-2 pl-8" htmlFor="sku">
            SKU
          </label>
        </td>
        <td className=" ">
          <input
            className="w-full px-3 py-2 border rounded-lg focus:border"
            type="text"
            name="sku"
            id="sku"
            placeholder={productInfo && productInfo.sku}
            value={productInfo.sku}
            onChange={(e) => setProductInfo({ ...productInfo, sku: e.target.value })}
            required
          />
        </td>
      </tr>
      <tr>
        <td>
          <label className="block font-bold text-gray-700 text-sm mb-2 pl-8" htmlFor="price">
            Price
          </label>
        </td>
        <td>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:border"
            type="text"
            name="price"
            id="price"
            placeholder={productInfo && productInfo.price}
            value={productInfo.price}
            onChange={(e) => setProductInfo({ ...productInfo, price: e.target.value })}
            required
          />
        </td>
        <td>
          <label className="block font-bold text-gray-700 text-sm mb-2 pl-8" htmlFor="discount_price">
            Discount
          </label>
        </td>
        <td>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:border"
            type="text"
            name="discount_price"
            id="discount_price"
            placeholder={productInfo && productInfo.discount_price}
            value={productInfo.discount_price}
            onChange={(e) => setProductInfo({ ...productInfo, discount_price: e.target.value })}
            required
          />
        </td>
      </tr>

      <tr>
        <td>
          <label className="block font-bold text-gray-700 text-sm mb-2 pl-8" htmlFor="subcategory_id">
            Subcategory Name
          </label>
        </td>
        <td>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:border"
            type="text"
            name="subcategory_id"
            id="subcategory_id"
            placeholder={productInfo && productInfo.subcategory_id}
            value={productInfo.subcategory_id}
            onChange={(e) => setProductInfo({ ...productInfo, subcategory_id: e.target.value })}
            required
          />
        </td>
        <td>
          <label className="block font-bold text-gray-700 text-sm mb-2 pl-8" htmlFor="active">
            Active
          </label>
        </td>
        <td>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:border"
            type="text"
            name="active"
            id="active"
            placeholder={productInfo && productInfo.active}
            value={productInfo.active}
            onChange={(e) => setProductInfo({ ...productInfo, active: e.target.value })}
            required
          />
        </td>
      </tr>

      <tr>
        <td>
          <label className="block font-bold text-gray-700 text-sm mb-2 pl-8" htmlFor="short_description">
            Short Description
          </label>
        </td>
        <td>
          <textarea
            className="w-full  px-3 py-2  border rounded-lg "
            type="textarea"
            name="short_description"
            id="short_description"
            placeholder={productInfo && productInfo.short_description}
            value={productInfo.short_Description}
            onChange={(e) => setProductInfo({ ...productInfo, short_description: e.target.value })}
            required
          />
        </td>
        <td>
          <label className="block font-bold text-gray-700 text-sm mb-2 pl-8" htmlFor="quantity">
            Quantity
          </label>
        </td>
        <td>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:border"
            type="text"
            name="quantity"
            id="quantity"
            placeholder={productInfo && productInfo.quantity}
            value={productInfo.quantity}
            onChange={(e) => setProductInfo({ ...productInfo, quantity: e.target.value })}
            required
          />
        </td>
      </tr>

      <tr>
        <td>
          <label className="block font-bold text-gray-700 text-sm mb-2 pl-8" htmlFor="long_description">
            Long Description
          </label>
        </td>
        <td colSpan="3">
          <textarea
            className="px-3 py-2 h-3/4 w-full border rounded-lg focus:border"
            type="text"
            name="long_description"
            id="long_description"
            placeholder={productInfo.long_description}
            value={productInfo.long_description}
            onChange={(e) => setProductInfo({ ...productInfo, long_description: e.target.value })}
            required
          />
        </td>
      </tr>

      <tr>
        <td>
          <label className="block font-bold text-gray-700 text-sm mb-2 pl-8" htmlFor="productImage">
            Image
          </label>
        </td>
        <td colSpan="3">
        
    <div class="flex  mt-8">
    <div class="w-full rounded-lg  bg-gray-50">
        <div class=" m-4">
            <label class="inline-block mb-2 text-gray-500">Image Upload</label>
            <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-full h-32 border-4 border-blue-950 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach an image</p>
                    </div>
                    <input type="file" class="opacity-0" 
                    name="productImage"
                    id="productImage"
                    
                    onChange={(e) => setProductInfo({ ...productInfo, productImage: e.target.files[0] })}
                    required/>
                </label>
            </div>
        </div>
        
    </div>
      </div> 
        </td>
      </tr>

     
    </tbody>
  </table>
  <div className="flex justify-end gap-2 mt-4">
    <button
      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 "
      type="button"
      onClick={() => navigate(`/products`)}
    >
      Cancel
    </button>

    <button
      className="bg-cyan-500 text-white py-2 px-4 mr-6 rounded-lg hover:bg-cyan-600 "
      type="button"
      onClick={() => handleSubmitAddProduct()}
    >
      Save
    </button>
  </div>

</div>

);
}


  