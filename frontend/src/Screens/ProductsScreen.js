import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts, saveProduct, deleteProduct } from '../actions/productActions';
import { signin } from '../actions/userActions';


function ProductsScreen(props) {

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList;
    
    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;

    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;
    const dispatch = useDispatch();


    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
            //
        };

    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setAuthor(product.author);
        setCategory(product.category);
        setCountInStock(product.countInStock);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
            _id: id,
            name, price, image, author, category,
            countInStock, description
        }));
    }

    const deleteHandler = (product) =>{
        dispatch(deleteProduct(product._id));
    }


    return <div className='content content-margined'>

        <div className='product-header'>
            <h3>Productos</h3>
            <button className='button primary' onClick={() => openModal({})}>Crear producto</button>
        </div>
        {modalVisible &&
            <div className='form'>
                <form onSubmit={submitHandler}>
                    <ul className='form-container'>
                        <li>
                            <h2>Crear Producto</h2>
                        </li>
                        <li>
                            {loadingSave && <div>Cargando...</div>}
                            {errorSave && <div>{errorSave}</div>}
                        </li>
                        <li>
                            <label htmlFor='name'>
                                Nombre
                            </label>
                            <input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor='price'>
                                Precio
                            </label>
                            <input type='text' name='price' id='price' value={price} onChange={(e) => setPrice(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor='image'>
                                Imagen
                            </label>
                            <input type='text' name='image' id='image' value={image} onChange={(e) => setImage(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor='author'>
                                Autor
                            </label>
                            <input type='text' name='author' id='author' value={author} onChange={(e) => setAuthor(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor='countInStock'>
                                Cantidad en stock
                            </label>
                            <input type='text' name='countInStock' id='countInStock' value={countInStock} onChange={(e) => setCountInStock(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor='category'>
                                Categoria
                            </label>
                            <input type='text' name='category' id='category' value={category} onChange={(e) => setCategory(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor='description'>
                                Descripcion
                            </label>
                            <textarea name='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </li>
                        <li>
                            <button type="submit" className='button primary'>{id ? "Actualizar" : "Crear"}</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => setModalVisible(false)} className='button secondary'>Volver</button>
                        </li>
                    </ul>
                </form>
            </div>
        }


        <div className='product-list'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Autor</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.author}</td>
                            <td>
                                <button className='button' onClick={() => openModal(product)}>Editar</button>
                                {' '}
                                <button className='button' onClick={() => deleteHandler(product)}>Eliminar</button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    </div>
}

export default ProductsScreen;

