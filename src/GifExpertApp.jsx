import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (category) => {
        if (categories.find(cat => cat.toLowerCase() === category.toLowerCase())) {
            return;
        }
        setCategories(() => [category, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewValue={onAddCategory} />

            {categories.map(category =>
                <GifGrid category={category} key={category} />
            )}

        </>
    );

}