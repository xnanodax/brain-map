require 'test_helper'

class Api::DeckSearchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_deck_searches_index_url
    assert_response :success
  end

end
