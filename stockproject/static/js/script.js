 document.addEventListener('DOMContentLoaded', function() {
            var stockData = JSON.parse('{{ stock_data|safe }}');

            varchartLabels = stockData.map(function(data) {
                return data.date;
            });

            var openPrices = stockData.map(function(data) {
                return data.open_price;
            });

            var closePrices = stockData.map(function(data) {
                return data.close_price;
            });

            var ctx = document.getElementById('stockChart').getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: chartLabels,
                    datasets: [
                        {
                            label: 'Open Price',
                            data: openPrices,
                            borderColor: 'blue',
                            backgroundColor: 'transparent',
                            borderWidth: 1
                        },
                        {
                            label: 'Close Price',
                            data: closePrices,
                            borderColor: 'green',
                            backgroundColor: 'transparent',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Price'
                            }
                        }
                    }
                }
            });
        });