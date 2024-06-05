
// eslint-disable-next-line no-unused-vars
import { Bar, Chart, Line, Pie } from 'react-chartjs-2'




const Dashboard = () => {

  return <div className="chart-container">
    <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
    <Pie
      datasetIdKey='id'
      data={{
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
          {
            id: 1,
            label: '',
            data: [5, 6, 7],
          },
          {
            id: 2,
            label: '',
            data: [3, 2, 1],
          },
        ],
      }}
    />
  </div>

};

export default Dashboard;
