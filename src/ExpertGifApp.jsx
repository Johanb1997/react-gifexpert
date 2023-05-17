import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const ExpertGifApp = () => {

    const [categories, setcategories] = useState(['dragon ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setcategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif Expert</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            ></AddCategory>
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category}></GifGrid>
                ))
            }
        </>
    )
}
