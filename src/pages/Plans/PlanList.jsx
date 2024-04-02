import CardPlan from "../../components/planComponents/CardPlan";


const PlanList = () => {

    const plans = [
        { id: 1, name: 'Plan 1', description: 'Description of plan 1', price: 10 },
        { id: 2, name: 'Plan 2', description: 'Description of plan 2', price: 20 },
        { id: 3, name: 'Plan 3', description: 'Description of plan 3', price: 30 },
      ];

  return (
    <>
      {plans.map((product) => (
        <CardPlan
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          func={() => console.log(`Clicked on ${product.name}`)}
        />
      ))}
    </>
  )
}

export default PlanList
