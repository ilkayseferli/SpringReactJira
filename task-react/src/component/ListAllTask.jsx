import React, { useState, useEffect } from 'react';
import { deleteTaskById, getAllTasks, getAllTasksByTitle } from '../service/TaskService';
import { useNavigate } from 'react-router-dom';
import PaginationComponent from '../component/PaginationComponent';

const ListAllTask = () => {
  const [taskList, setTaskList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    listAllTasksOrListByTitle();
  }, [currentPage, pageSize, search]);

  const listAllTasksOrListByTitle = () => {
    const fetchTasks = search.trim()
      ? getAllTasksByTitle(currentPage, pageSize, search)
      : getAllTasks(currentPage, pageSize);

    fetchTasks
      .then((response) => {
        setTaskList(response.data.content);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
        setTaskList([]);
      });
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleUpdate = (id) => {
    navigate(`/edit-tasks/${id}`);
  };

  const handleAddTask = () => {
    navigate('/add-tasks');
  };

  const handleDelete = (id) => {
    deleteTaskById(id)
      .then(() => {
        listAllTasksOrListByTitle();
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  return (
    <div>
      <button className="btn btn-success" onClick={handleAddTask}>
        Add Task
      </button>
      <div className="d-flex mt-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          placeholder="Search by title..."
        />
        <button onClick={handleSearch} className="btn btn-primary ms-2">
          Search
        </button>
      </div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task Title</th>
            <th scope="col">Task Text</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskList.length > 0 ? (
            taskList.map((task) => (
              <tr key={task.id}>
                <th>{task.id}</th>
                <td>{task.title}</td>
                <td>{task.text}</td>
                <td>
                  <button className="btn btn-success me-2" onClick={() => handleUpdate(task.id)}>
                    Update
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No tasks found</td>
            </tr>
          )}
        </tbody>
      </table>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default ListAllTask;
