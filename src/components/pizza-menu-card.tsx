import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PizzaMenuCardProps {
  name: string
  description: string
  price: string
  image: string
  isVegetarian?: boolean
  isSpicy?: boolean
  ingredients?: string[]
}

export function PizzaMenuCard({
  name,
  description,
  price,
  image,
  isVegetarian = false,
  isSpicy = false,
  ingredients = [],
}: PizzaMenuCardProps) {
  return (
    <Card className="w-full max-w-sm bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            {isVegetarian && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                Vegetariana
              </Badge>
            )}
            {isSpicy && (
              <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200">
                🌶️ Piccante
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-primary leading-tight">{name}</h3>
          <span className="text-2xl font-bold text-secondary ml-4">{price}</span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

        {ingredients.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-medium text-primary mb-2">Ingredienti:</p>
            <div className="flex flex-wrap gap-1">
              {ingredients.map((ingredient, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-muted text-muted-foreground border-border">
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium" size="lg">
          Aggiungi al Carrello
        </Button>
      </CardFooter>
    </Card>
  )
}
