def fill_in_and_log_in(email, password, check_rememeber_me = false)
  within("#new_user") do
    fill_in "Email", with: email
    fill_in "Password", with: password

    check "user_remember_me" if check_rememeber_me
  end

  click_button I18n.t("buttons.log_in")
end