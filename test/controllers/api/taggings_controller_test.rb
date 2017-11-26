require 'test_helper'

class Api::TaggingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_taggings_index_url
    assert_response :success
  end

  test "should get create" do
    get api_taggings_create_url
    assert_response :success
  end

  test "should get show" do
    get api_taggings_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_taggings_destroy_url
    assert_response :success
  end

end
