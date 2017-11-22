require 'test_helper'

class Api::DecksControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_decks_create_url
    assert_response :success
  end

  test "should get update" do
    get api_decks_update_url
    assert_response :success
  end

  test "should get show" do
    get api_decks_show_url
    assert_response :success
  end

  test "should get delete" do
    get api_decks_delete_url
    assert_response :success
  end

  test "should get index" do
    get api_decks_index_url
    assert_response :success
  end

  test "should get edit" do
    get api_decks_edit_url
    assert_response :success
  end

end
