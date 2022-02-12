import React from 'react';

export default function Category() {

    function getCategory(element) {
        console.log(element.innerText);
        let categoryItems = document.querySelectorAll('.category');
        // console.log(categoryItems);
        categoryItems.forEach((currentCategory) => {
            currentCategory.classList.remove("activeCategory");
        });
        element.classList.add("activeCategory");
    }

    return (
        <div className="container-fluid px-2">
            <div className="row">
                <div className="container px-2 px-0">
                    <div className="row">
                        <div className="col-12 categoryHead">
                            Categories
                        </div>

                        <div className="categoriesContainer w-100 px-3">

                            <div
                                className="category activeCategory"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                            >
                                Madness
                            </div>
                            <div
                                className="category"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                            >
                                Desire
                            </div>

                          
                            <div
                                className="category"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                            >
                                Fantasy
                            </div>
                            <div
                                className="category"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                            >
                                Sad
                            </div>
                        
                        
                            <div
                                className="category"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                            >
                                Desire
                            </div>
                            <div
                                className="category"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                            >
                                Sad
                            </div>
                       
                        
                            <div
                                className="category"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                            >
                                Sad
                            </div>
                            <div
                                className="category"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                            >
                                Crazy
                            </div>
                        
                            <div
                                className="category"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                            >
                                Crazy
                            </div>
                            <div
                                className="category"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                            >
                                Crazy
                            </div>
                        
                            <div
                                className="category"
                                type="button"
                                onClick={(e) => { getCategory(e.target) }}
                                >
                                Crazy
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
