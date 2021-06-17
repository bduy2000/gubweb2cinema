$(function () {
    $.get('/statistic/chart/movies',function(data){
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data,
            options: {
                responsive: true,
                scales: {
                    'revenue': {
                        position: 'left'
                    },
                    'count': {
                        position: 'right'
                    }
                },
            }
        });
    });
    });