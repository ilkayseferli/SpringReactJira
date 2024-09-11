import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTaskById, saveTask, updateTask } from '../service/TaskService';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    title: '',
    text: '',
  });

  useEffect(() => {
    if (id) {
      getTaskById(id)
        .then((response) => {
          setTitle(response.data.title);
          setText(response.data.text);
        })
        .catch((error) => {
          console.error('Error fetching task:', error);
        });
    }
  }, [id]);

  const validateForm = () => {
    const errorsCopy = { ...errors };
    let valid = true;

    if (title.trim()) {
      errorsCopy.title = '';
    } else {
      errorsCopy.title = 'Title is required!';
      valid = false;
    }

    if (text.trim()) {
      errorsCopy.text = '';
    } else {
      errorsCopy.text = 'Text is required!';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const handleSaveOrUpdate = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const task = { title, text };
      const request = id ? updateTask(id, task) : saveTask(task);

      request
        .then(() => {
          navigate('/tasks');
        })
        .catch((error) => {
          console.error('Error saving task:', error);
        });
    }
  };

  return (
    <div className="container h-100 d-flex align-items-center justify-content-center">
      <form className="w-50" onSubmit={handleSaveOrUpdate}>
        <div className="d-flex flex-column">
          <div className="form-group mt-3">
            <label htmlFor="title">Task Title</label>
            <input
              type="text"
              className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              id="title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="invalid-feedback">{errors.title}</div>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="text">Task Text</label>
            <textarea
              rows={5}
              className={`form-control ${errors.text ? 'is-invalid' : ''}`}
              id="text"
              placeholder="Enter text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="invalid-feedback">{errors.text}</div>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
