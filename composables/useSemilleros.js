import data from '@/static/semilleros.json'

// const { data, error } = await useFetch('http://localhost:3500/semilleros');

// if (error.value) {
//     console.error('Error fetching semilleros data:', error.value);
// }


export const useSemilleros = () => {
    const semilleros = ref([])

    semilleros.value = data

    const obtenerSemillero = (indice) => {
        return semilleros.value[indice]
    }

    const obtenerSemilleros = () => {
        return semilleros.value
    }

    return {
        semilleros,
        obtenerSemillero,
        obtenerSemilleros,
    }
}
