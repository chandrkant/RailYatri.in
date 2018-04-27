require 'test_helper'

class Mobile::MobileViewControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get mobile_mobile_view_home_url
    assert_response :success
  end

end
