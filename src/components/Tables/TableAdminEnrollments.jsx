/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from 'react';
import { Table, Button, Modal, Pagination } from 'react-bootstrap';

import { EnrollmentProvider } from '../../context/EnrollmentContext';
import { ClassProvider } from '../../context/ClassContex';
import { UsersProvider } from '../../context/UsersContext';
import formatDateTime from '../../utils/dateTimeUtils';
import ConfirmationModal from '../Modals/ConfirmationModal';
import './../../css/Tables.css';

function TableAdminEnrollments() {
  const { enrollments, deleteEnrollment } = useContext(EnrollmentProvider);
  const { getClassDate, getClassNameById, getClassTeacherById } = useContext(ClassProvider);
  const { getUserName } = useContext(UsersProvider);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [userNames, setUserNames] = useState({});
  const [classNames, setClassNames] = useState({});
  const [teachers, setTeachers] = useState({});
  const [classDates, setClassDates] = useState({});

  useEffect(() => {
    async function fetchUserNames() {
      const names = {};
      for (const enrollment of enrollments) {
        const userName = await getUserName(enrollment.user);
        names[enrollment._id] = userName;
      }
      setUserNames(names);
    }
    fetchUserNames();
  }, [enrollments, getUserName]);

  useEffect(() => {
    async function fetchData() {
      const classNames = {};
      const teacherNames = {};
      const dates = {};
      for (const enrollment of enrollments) {
        const className = await getClassNameById(enrollment.gymClass);
        const teacherName = await getClassTeacherById(enrollment.gymClass);
        const date = await getClassDate(enrollment.gymClass);
        classNames[enrollment._id] = className;
        teacherNames[enrollment._id] = teacherName;
        dates[enrollment._id] = date;
      }
      setClassNames(classNames);
      setTeachers(teacherNames);
      setClassDates(dates);
    }
    fetchData();
  }, [enrollments, getClassNameById, getClassTeacherById, getClassDate]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = enrollments.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const isEmpty = () => enrollments.length === 0;

  return (
    <>
      <div className="text-star bg-dark text-white rounded-top-4 py-1">
        <h3 className="subtitle ps-3 mt-1 pt-1 my-0 ">Classes enrollments</h3>
      </div>
      <Table className="mb-0">
        <thead>
          <tr className="subtitle">
            <th>Index</th>
            <th>Id</th>
            <th>Class name</th>
            <th>Teacher</th>
            <th>Date and time</th>
            <th>User name</th>
          </tr>
        </thead>
        <tbody>
          {isEmpty() ? (
            <tr>
              <td colSpan="4">
                <h3 className="paragraph">No enrollments found</h3>
              </td>
            </tr>
          ) : (
            currentItems.map((enrollment, index) => {
              const rowIndex = index + indexOfFirstItem;
              const { _id, user } = enrollment;
              return (
                <tr key={_id} className="paragraph fw-bold ">
                  <td className="bg-dark text-light border-0 pt-3">{rowIndex + 1}</td>
                  <td className="bg-dark text-light border-0 pt-3">{_id}</td>
                  <td className="bg-dark text-light border-0 pt-3">{classNames[_id]}</td>
                  <td className="bg-dark text-light border-0 pt-3">{teachers[_id]}</td>
                  <td className="bg-dark text-light border-0 pt-3">{formatDateTime(classDates[_id])}</td>
                  <td className="bg-dark text-light border-0 pt-3">{userNames[_id]}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-content-center mt-4 paragraph">
        {Array.from({ length: Math.ceil(enrollments.length / itemsPerPage) }).map((_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
}
export default TableAdminEnrollments;