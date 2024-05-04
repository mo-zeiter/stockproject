from django.shortcuts import render
import yfinance as yf
from .models import StockData


def stock_form_view(request):

    if request.method == 'POST':
        ticker_symbol = request.POST.get('ticker_symbol')
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')

        stock = yf.download(ticker_symbol, start=start_date, end=end_date)
        stock_data = []
        for index, row in stock.iterrows():
            data = {
                'ticker_symbol' : ticker_symbol,
                'date' : index.date(),
                'open_price' : row.Open,
                'close_price' : row.Close
            }
            stock_data.append(data)

        context = {
            'stock_data': stock_data,
            'ticker_symbol': ticker_symbol,
            'start_date': start_date,
            'end_date': end_date
        }
        context = {'stock_data' : stock_data}
        return render(request, 'result.html', context)
    else:
        return render(request, 'form.html')