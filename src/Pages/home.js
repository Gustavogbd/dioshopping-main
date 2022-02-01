import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/';
import Card from '../components/Card';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = { };
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1;
                    })
                    .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = { };

    for(let i = 0; i < arrayCategory.length; i++){
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    return(



        <div className='container-fluid'>
            <div className='container'>
            <div className='linha'></div>
                <div className='row'>
                    <div className='col-12 categorias mt-3'>
                        <h2 className='title'>CATEGORIAS</h2>
                        <ul className='lista'>
                            {category.map(
                                category => {
                                    return (
                                        <li
                                            key = {category.id} 
                                            name= {category.name}
                                            details={count[category.name]}
                                        >{category.name}</li>
                                    )
                                }
                            )}
                        </ul>
                        <div className='linha'></div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                        {products.map(item => {
                            return(
                                    <div className='col-md-4'>
                                        <Card
                                            key={item.id_product}
                                            product={item}
                                        >
                                            {item.name_product}
                                        </Card>
                                    </div>
                                )
                    })}
                </div>
            </div>        
        </div>
    )
}

export default HomePage;
