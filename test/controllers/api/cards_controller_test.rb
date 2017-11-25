require 'test_helper'

class Api::CardsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_cards_create_url
    assert_response :success
  end

  test "should get show" do
    get api_cards_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_cards_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_cards_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_cards_delete_url
    assert_response :success
  end

end
