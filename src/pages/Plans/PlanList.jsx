import CardPlan from "../../components/planComponents/CardPlan";

const PlanList = () => {

    const plans = [
        { id: 1, name: 'Plan 1', price: 10 , description: 'Description of plan 1', page: 'clases'},
        { id: 2, name: 'Plan 2', price: 20, description: 'Description of plan 2', page: 'entrenamiento' },
        { id: 3, name: 'Plan 3', price: 30, description: 'Description of plan 3', page: 'completo' },
      ];

  return (
    <>
      {plans.map((product) => (
        <CardPlan
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          page={product.page}
        />
      ))}
    </>
  )
}

export default PlanList
