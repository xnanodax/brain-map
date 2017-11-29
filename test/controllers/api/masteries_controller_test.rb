require 'test_helper'

class Api::MasteriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_masteries_index_url
    assert_response :success
  end

  test "should get show" do
    get api_masteries_show_url
    assert_response :success
  end

end
