require 'test_helper'

class Api::TagSearchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_tag_searches_index_url
    assert_response :success
  end

end
