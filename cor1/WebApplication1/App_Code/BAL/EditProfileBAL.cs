using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


public class EditProfileBAL
{
    public EditProfileBAL() { }

    EditProfileDBService EditProfileDB = new EditProfileDBService();
    public string EditProfile(string userID, string userNewMail, string userNewPhone)
    {

        return EditProfileDB.EditProfile(userID, userNewMail, userNewPhone);
    }




}
