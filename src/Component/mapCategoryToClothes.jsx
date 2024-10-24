import React from 'react'

function mapCategoryToClothes(category) {

    if (category.toLowerCase().includes("clothing")) {
        return "clothes";
    }

    return category.toLowerCase().replace(/'/g, "").replace(/\s+/g, "-");
}

export default mapCategoryToClothes