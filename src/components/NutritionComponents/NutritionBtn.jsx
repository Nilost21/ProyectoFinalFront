import './../../css/NutritionComponent.css';

const NutritionBtn = () => {
  return (
    <>
      <button
        type="button"
        className="rounded-5 subtitle py-2 my-3 ps-5 pe-3 shadow-on-hover btn btn-primary mybtn">
        Check all blog
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-4 mt-1"
          viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
        </svg></button>
    </>
  )
}

export default NutritionBtn
