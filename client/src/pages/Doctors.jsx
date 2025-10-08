import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
   const { speciality } = useParams();
   const [filerDoc, setFilterDoc] = useState([]);

   const navigate = useNavigate();

   const { doctors } = useContext(AppContext);

   const applyFilter = () => {
      if (speciality) {
         setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
      } else {
         setFilterDoc(doctors);
      }
   };

   useEffect(() => {
      applyFilter();
   }, [doctors, speciality]);

   return (
      <div>
         <p className="text-gray-600">Browse through the doctors specialist.</p>
         <div className="flex flex-col sm:flex-row items-start gap-5 m-5">
            <div className="flex flex-col gap-4 text-sm text-gray-600 className = 'sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  transition-all cursor-pointer'">
               <p
                  onClick={() =>
                     setFilterDoc === "General physician"
                        ? navigate("/doctors")
                        : navigate("/doctors/General physician")
                  }
                  className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  transition-all cursor-pointer"
               >
                  General Physician
               </p>
               <p
                  onClick={() =>
                     setFilterDoc === "Gynecologist"
                        ? navigate("/doctors")
                        : navigate("/doctors/Gynecologist")
                  }
                  className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  transition-all cursor-pointer"
               >
                  Gynecologist
               </p>
               <p
                  onClick={() =>
                     setFilterDoc === "Dermatologist"
                        ? navigate("/doctors")
                        : navigate("/doctors/Dermatologist")
                  }
                  className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  transition-all cursor-pointer"
               >
                  Dermatologist
               </p>
               <p
                  onClick={() =>
                     setFilterDoc === "Pediatricians"
                        ? navigate("/doctors")
                        : navigate("/doctors/Pediatricians")
                  }
                  className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  transition-all cursor-pointer"
               >
                  Pediatricians
               </p>
               <p
                  onClick={() =>
                     setFilterDoc === "Neurologist"
                        ? navigate("/doctors")
                        : navigate("/doctors/Neurologist")
                  }
                  className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  transition-all cursor-pointer"
               >
                  Neurologist
               </p>
               <p
                  onClick={() =>
                     setFilterDoc === "Gastroenterologist"
                        ? navigate("/doctors")
                        : navigate("/doctors/Gastroenterologist")
                  }
                  className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  transition-all cursor-pointer"
               >
                  Gastroenterologist
               </p>
            </div>
            <div className="w-full grid grid-cols-[var(--template-grid-cols-auto)] gap-4 gap-y-6">
               {filerDoc.map((item, index) => (
                  <div
                     onClick={() => navigate(`/appointment/${item._id}`)}
                     className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
                  >
                     <img className="bg-blue-50" src={item.image} alt="" />

                     <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-center text-green-500 ">
                           <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                           <p>Available</p>
                        </div>

                        <p className="text-gray-900 text-lg font-medium">
                           {item.name}
                        </p>

                        <p className="text-gray-600 text-sm ">
                           {item.speciality}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Doctors;
