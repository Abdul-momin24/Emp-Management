import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/add_category', { category })
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/category');
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => {
                console.error(err);
                alert('Something went wrong while adding the category.');
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2>Add Category</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="category"><strong>Category:</strong></label>
                        <input
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Enter Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="form-control rounded-0"
                            required
                        />
                    </div>
                    <button
                        className='btn btn-success w-100 rounded-0 mb-2'
                        type="submit"
                        disabled={!category.trim()}
                    >
                        Add Category
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
