# Messaging thing (name pending inspiration)
_Messaging site/app? with rails and react, using end-to-end encryption_


## PLANNING

### RAILS STRUCTURE TODO
  * create controllers, models for conversations, messages
  * default page: sign in page
  * user authentication
  * permissions for users
  * views??

### RAILS DONE
  * add bcrypt
  * validations:
    * password and password confirmation
    * email format
    * username presence and uniqueness
    * message body, conversation_id and user_id presence
  * protect_from_forgery: helps prevent CRSF attacks
  * authorizations:
    * check that user is signed in
    * check that user is in conversation


### REACT TODO
  * figure out what I need to do
  * add uuid

### LINKS
  * https://secushare.org/end2end#header
  * implementation of end-to-end with rails and virgil: https://github.com/cbetta/virgil-rails-chat/tree/after/app/views
  * guide to general encryption with rails: https://qiita.com/alokrawat050/items/ff6dceec32baa0c8fa57
  * tool to test rails security: https://brakemanscanner.org/
  * more encryption with rails: https://pawelurbanek.com/rails-secure-encrypt-decrypt
  * tool to validate strong password: https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html
