using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

/// <summary>
/// Summary description for UsersWS
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class UsersWS : System.Web.Services.WebService
{

    public UsersWS()
    {

    }

    [WebMethod]
    public string LoginUserUsingClass(string name, string password)
    {
        LoginBAL loginBal = new LoginBAL();
        return loginBal.LoginUserUsingClass(name, password);
    }

    [WebMethod]
    public string SignInUserUsingClass(string name, string password, string mail, string phone)
    {
        SignInBAL signBal = new SignInBAL();
        return signBal.SignInUserUsingClass(name, password, mail, phone);
    }

    [WebMethod]
    public string AddNewAnimal(string userID,string name, string year, string weight, string hieght, string type, string race,
        string sex, string description, string diseases, string treatments, string vaccines)
    {
     
        NewAnimalBAL AnimalBal = new NewAnimalBAL();
        return AnimalBal.AddNewAnimal(userID,name, year, weight, hieght, type, race,sex, description, diseases, treatments, vaccines);

    }


    [WebMethod]
    public List<string> GetUserAnimalsUsingClass(string userID)
    {
      UserAnimalsBAL AnimalsBal = new UserAnimalsBAL();
      return AnimalsBal.GetUserAnimalsUsingClass(userID);
    }

    [WebMethod]
    public string GetAnimalDetailsUsingClass(string animalID)
    {
        AnimalDetailsBAL AnimalBal = new AnimalDetailsBAL();
        return AnimalBal.GetAnimalDetailsUsingClass(animalID);
    }

    [WebMethod]
    public string SaveAnimal(string animalID, string name, string year, string weight, string hieght, string type, string race,
        string sex, string description, string diseases, string treatments, string vaccines)
    {
        SaveAnimalBAL AnimalBal = new SaveAnimalBAL();
        return AnimalBal.SaveAnimal(animalID, name, year, weight, hieght, type, race, sex, description, diseases, treatments, vaccines);


    }

    [WebMethod]
    public string DeleteAnimal(string animalID)
    {
        DeleteAnimalBAL AnimalBal = new DeleteAnimalBAL();
        return AnimalBal.DeleteAnimal(animalID);
    }

    [WebMethod]
    public string EditProfile(string userID, string userNewMail, string userNewPhone)
    {
        EditProfileBAL EditBal = new EditProfileBAL();
        return EditBal.EditProfile(userID, userNewMail, userNewPhone);
    }



}


