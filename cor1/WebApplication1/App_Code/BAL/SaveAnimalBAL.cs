﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


public class SaveAnimalBAL
{
    SaveAnimalDBService AnimalDB = new SaveAnimalDBService();
    public SaveAnimalBAL() { }


    public string SaveAnimal(string animalID, string name, string year, string weight, string hieght, string type, string race,
      string sex, string description, string diseases, string treatments, string vaccines)
    {       
        return AnimalDB.SaveAnimal(animalID, name, year, weight, hieght, type, race, sex, description, diseases, treatments, vaccines);
    }
}
