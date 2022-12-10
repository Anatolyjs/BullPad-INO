import projectLogo from "../img/Bullpad.jpg";

const SET_ACTIVE_SALES = 'SET_ACTIVE_SALES',
    SET_ACTIVE_PROJECT_INFO = 'SET_ACTIVE_PROJECT_INFO';

const initialState = {
    allSales: [
        {  
            id: 1,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "110",
            price: "450 BUSD",
        },
        {   
            id: 2,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "200",
            price: "150 BUSD",
        },
        {   
            id: 3,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "300",
            price: "50 BUSD",
        },
        {   
            id: 4,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "400",
            price: "150 BUSD",
        },
        {   
            id: 5,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "500",
            price: "50 BUSD",
        },
        {   
            id: 6,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "390",
            price: "50 BUSD",
        },
        {   
            id: 7,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "390",
            price: "150 BUSD",
        },
        {   
            id: 8,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "390",
            price: "50 BUSD",
        },
        {
            id: 9,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "20",
            price: "150 BUSD",
        },
        {
            id: 10,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "30",
            price: "50 BUSD",
        },
        {
            id: 11,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "40",
            price: "150 BUSD",
        },
        {
            id: 12,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "50",
            price: "50 BUSD",
        },
        {
            id: 13,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "60",
            price: "450 BUSD",
        },
        {
            id: 14,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "70",
            price: "150 BUSD",
        },
        {
            id: 15,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "80",
            price: "50 BUSD",
        },
        {
            id: 16,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "90",
            price: "150 BUSD",
        },
        {
            id: 17,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "100",
            price: "50 BUSD",
        }
    ],
    sales: {
        liveProjects: [
            {  
                id: 1,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "110",
                price: "450 BUSD",
            },
            {   
                id: 2,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "200",
                price: "150 BUSD",
            },
            {   
                id: 3,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "300",
                price: "50 BUSD",
            },
            {   
                id: 4,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "400",
                price: "150 BUSD",
            },
            {   
                id: 5,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "500",
                price: "50 BUSD",
            },
            {   
                id: 6,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "390",
                price: "50 BUSD",
            },
            {   
                id: 7,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "390",
                price: "150 BUSD",
            },
            {   
                id: 8,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "390",
                price: "50 BUSD",
            }
        ],
        endedProjects: [
            {
                id: 9,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "20",
                price: "150 BUSD",
            },
            {
                id: 10,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "30",
                price: "50 BUSD",
            },
            {
                id: 11,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "40",
                price: "150 BUSD",
            },
            {
                id: 12,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "50",
                price: "50 BUSD",
            },
        ],
        futureProjects: [
            {
                id: 13,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "60",
                price: "450 BUSD",
            },
            {
                id: 14,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "70",
                price: "150 BUSD",
            },
            {
                id: 15,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "80",
                price: "50 BUSD",
            },
            {
                id: 16,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "90",
                price: "150 BUSD",
            },
            {
                id: 17,
                name: "NFT Shoebox",
                logo: projectLogo,
                type: "FCFS",
                supply: "100",
                price: "50 BUSD",
            }
        ],
    },
    activeProjects: [
        {  
            id: 1,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "110",
            price: "450 BUSD",
        },
        {   
            id: 2,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "200",
            price: "150 BUSD",
        },
        {   
            id: 3,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "300",
            price: "50 BUSD",
        },
        {   
            id: 4,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "400",
            price: "150 BUSD",
        },
        {   
            id: 5,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "500",
            price: "50 BUSD",
        },
        {   
            id: 6,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "390",
            price: "50 BUSD",
        },
        {   
            id: 7,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "390",
            price: "150 BUSD",
        },
        {   
            id: 8,
            name: "NFT Shoebox",
            logo: projectLogo,
            type: "FCFS",
            supply: "390",
            price: "50 BUSD",
        }
    ],
    activeProjectInfo: null,
    currentPage: 0
}
const keys = [...Object.keys(initialState.sales)]

const salesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_SALES:
            return {
                ...state,
                activeProjects: [...state.sales[keys[action.payload]]],
                currentPage: action.payload
            }
        case SET_ACTIVE_PROJECT_INFO:
            return {
                ...state,
                activeProjectInfo: [...state.allSales.filter((el) => el.id == action.payload)][0]
            }
        default:
            return state;
    }
} 

export const setActiveSales = (payload) => ({type: SET_ACTIVE_SALES, payload});
export const setActiveProjectInfo = (payload) => ({type: SET_ACTIVE_PROJECT_INFO, payload});

export default salesReducer;