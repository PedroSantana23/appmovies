import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }) {
    const [ favorite, setFavorite ] = useState([])

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            { children }
        </FavoritesContext.Provider>
    );
}

// Hook personalizado
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite) {
        
        // Verificar se tem item favorito repetido
        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id)

        // Nova lista recebe lista anterior
        let newList = [...favorite]

        // Verificar se não tem repetido e adicionar o item na lista de favoritos
        if(!repeatedFavorite) {
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        // Se for necessário ele vai ser tirado da lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id )
        return setFavorite(newList)

    }

    return {
        favorite,
        addFavorite
    }
    
}