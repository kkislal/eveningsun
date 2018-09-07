class MainController < ApplicationController
  def index

  end

  def about
  end

  def factoring
  end

  def consultancy
  end

  def test
  end

  def locale
    if params[:locale] == "tr"
        session[:locale] = "tr"
        I18n.locale = "tr"
    else
      session[:locale] = "en"
      I18n.locale = "en"
    end

    render('index')
  end

end
