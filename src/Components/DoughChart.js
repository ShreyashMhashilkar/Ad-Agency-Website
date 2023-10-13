import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, ArcElement);



const DoughChart = (props) => {
    const [output, setOutput] = useState([])

    const fetchData = () => {
        const product_data =
        {
            'cosmetics': [20, 40, 30],
            'serums': [30, 40, 50],
            'facewash': [45, 20, 35],
            'shampoo': [60, 30, 20],
            'conditioner': [30, 40, 20]
        }
        let final_name = product_data[props.name]
        setOutput(final_name)

    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "right"
            },
        },
    };


    const data = {
        labels: ['Male', 'Female', 'Unknown'],
        datasets: [
            {
                label: '%',
                data: output,
                backgroundColor: [
                    'red',
                    'yellow',
                    'blue'

                ],

                borderWidth: 1,
            },
        ],
    };

    useEffect(() => {
        fetchData()

    }, [props.name])


    return (
        <div style={{ position: 'relative', height: '59vh', width: '66vw' }}>
            <Doughnut data={data} options={options} />
        </div>


    )
}

export default DoughChart