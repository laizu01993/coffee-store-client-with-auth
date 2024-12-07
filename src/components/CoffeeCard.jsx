
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,coffees, setCoffees}) => {

    // destructure
    const {_id, name, quantity, supplier, taste, photo} = coffee;

    // event handler for delete
    const handleDelete = _id =>{
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
              
              const remaining = coffees.filter(cof => cof._id !== _id)
              setCoffees(remaining);
            }
          })
        }
      });
      
    }
    return (
        <div className="card card-side shadow-xl bg-slate-100 mt-4">
        <figure>
          <img
            src={photo}
            alt="Movie" />
        </figure>
        <div className=" flex justify-between w-full pr-4 p-8">
          <div className=''>
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className=''>
                <button className='btn'>View</button>
                <br />
                <Link to={`updateCoffee/${_id}`}>
                <button className='btn mt-3'>Edit</button>
                </Link>
                <br />
                <button
                onClick={() => handleDelete(_id)} 
                className='btn mt-3 bg-red-500'>x</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;