class LoginMailer < ApplicationMailer
    default from: 'notifications@example.com'

    CONTACT_EMAIL = 'vetal.shtager@gmail.com'

    def submission(message)
        @message = message
        mail(to: CONTACT_EMAIL, subject: 'New Login Page Submission')
    end
end
