import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"
import { useMemo, useEffect } from "react"

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])

  useEffect(() => {
    if (hasDrinks) {
      const updatedDrink = drinks.drinks[0]
      const drinkCard = document.getElementById(`drink-${updatedDrink.idDrink}`)
      if (drinkCard) {
        drinkCard.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [hasDrinks, drinks])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recipes</h1>
      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-10">
          {drinks.drinks.map((drink) => (
            <div id={`drink-${drink.idDrink}`} key={drink.idDrink}>
              <DrinkCard drink={drink} />
            </div>
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">Search for drinks</p>
      )}
    </>
  )
}