import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';
import './Header-card.css';

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();

    return(
        <div className='container mt-5'>
            <div className='container caixa'>
                    <img width="140px" src={product.image} alt={product.name_product} className='imgproduto'/>
                    <h5 className='nomecamisa'>
                        {children}
                    </h5>
                    <div className='roww'></div>
                    <p className='preco'>
                        R$ {product.price.toFixed(2)}
                    </p>
                    <div className='roww'></div>
                
                <button
                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                 className='botaoadicionar'>
                    Adicionar
                </button>
            </div>
        </div>
    )
}

export default Card;
