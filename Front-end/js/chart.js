let nomeBairro = localStorage.bairro;
let valor = localStorage.num;
var ctx = document.getElementById('myChart').getContext('2d');
var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: {
        datasets: [{
            data: [30,25,45],
        backgroundColor: [
            'Red',
            'Yellow',
            'Blue'
        ],
        hoverBackgroundColor: [
            'Red',
            'Yellow',
            'Blue'
        ]
        }],

    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [nomeBairro]
    }
});
