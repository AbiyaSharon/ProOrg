-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ProOrg
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ProOrg
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ProOrg` DEFAULT CHARACTER SET utf8 ;
USE `ProOrg` ;

-- -----------------------------------------------------
-- Table `ProOrg`.`ProducerOrganisation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`ProducerOrganisation` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(105) NOT NULL,
  `RegistrationNumber` VARCHAR(45) NULL,
  `AddressLine1` VARCHAR(100) NOT NULL,
  `AddressLine2` VARCHAR(100) NULL,
  `City` VARCHAR(45) NOT NULL,
  `Pincode` VARCHAR(6) NOT NULL,
  `State` VARCHAR(45) NOT NULL DEFAULT 'TamilNadu',
  `Country` VARCHAR(45) NOT NULL DEFAULT 'India',
  `PrimaryMobileNumber` VARCHAR(45) NULL,
  `SecondaryMobileNumber` VARCHAR(45) NULL,
  `Email` VARCHAR(45) NULL,
  `IsActive` TINYINT(1) NULL DEFAULT 1,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `uq_ProducerOrganisation_Name_idx` (`Name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ProOrg`.`Producer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`Producer` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ProducerOrganization_Id` INT NOT NULL,
  `MembershipNumber` VARCHAR(45) NOT NULL,
  `MemberFromDate` DATE NULL,
  `Name` VARCHAR(100) NOT NULL,
  `RegistrationNumber` VARCHAR(45) NULL,
  `AddressLine1` VARCHAR(100) NOT NULL,
  `AddressLine2` VARCHAR(100) NULL,
  `City` VARCHAR(45) NOT NULL,
  `Pincode` VARCHAR(6) NOT NULL,
  `State` VARCHAR(45) NOT NULL DEFAULT 'Tamilnadu',
  `Country` VARCHAR(45) NOT NULL DEFAULT 'India',
  `PrimaryMobileNumber` VARCHAR(45) NOT NULL,
  `SecondaryMobileNumber` VARCHAR(45) NULL,
  `Email` VARCHAR(45) NULL,
  `IsActive` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `uq_Producer_ProducerOrganisationMembershipNumber_idx` (`ProducerOrganization_Id` ASC, `MembershipNumber` ASC) ,
  UNIQUE INDEX `uq_Producer_ProducerOrganisationPrimaryMobileNumber_idx` (`PrimaryMobileNumber` ASC, `ProducerOrganization_Id` ASC) ,
  UNIQUE INDEX `uq_Producer_ProducerOrganisationEmail_idx` (`ProducerOrganization_Id` ASC, `Email` ASC) ,
  CONSTRAINT `fk_Producer_ProducerOrganisation`
    FOREIGN KEY (`ProducerOrganization_Id`)
    REFERENCES `ProOrg`.`ProducerOrganisation` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ProOrg`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`Product` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ProducerOrganisation_Id` INT NOT NULL,
  `Name` VARCHAR(100) NOT NULL,
  `Code` VARCHAR(45) NOT NULL,
  `UnitOfMeasure` VARCHAR(45) NULL,
  `CGSTPercentPerUnit` INT NULL,
  `SGSTPercentPerUnit` INT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_Product_ProducerOrganisation1_idx` (`ProducerOrganisation_Id` ASC) ,
  UNIQUE INDEX `uq_Product_ProducerOrganisationCode_idx` (`ProducerOrganisation_Id` ASC, `Code` ASC) ,
  CONSTRAINT `fk_Product_ProducerOrganisation1`
    FOREIGN KEY (`ProducerOrganisation_Id`)
    REFERENCES `ProOrg`.`ProducerOrganisation` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ProOrg`.`ProducerProduct`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`ProducerProduct` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Producer_Id` INT NOT NULL,
  `Product_Id` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_ProducerProduct_Producer1_idx` (`Producer_Id` ASC) ,
  INDEX `fk_ProducerProduct_Product11_idx` (`Product_Id` ASC) ,
  UNIQUE INDEX `uq_ProducerProduct_ProducerProduct_idx` (`Producer_Id` ASC, `Product_Id` ASC) ,
  CONSTRAINT `fk_ProducerProduct_Producer1`
    FOREIGN KEY (`Producer_Id`)
    REFERENCES `ProOrg`.`Producer` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProducerProduct_Product11`
    FOREIGN KEY (`Product_Id`)
    REFERENCES `ProOrg`.`Product` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ProOrg`.`ProducerProductUpload`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`ProducerProductUpload` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ProducerOrganisation_Id` INT NOT NULL,
  `ProducerProduct_Id` INT NOT NULL,
  `BatchNo` VARCHAR(45) NOT NULL,
  `UploadTime` DATETIME NOT NULL,
  `Quantity` INT NOT NULL,
  `ProducerPricePerUnit` DOUBLE NOT NULL,
  `CustomerPricePerUnit` DOUBLE NOT NULL,
  `IsActive` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`Id`),
  INDEX `fk_ProducerProductUpload_ProducerProduct1_idx` (`ProducerProduct_Id` ASC) ,
  INDEX `fk_ProducerProductUpload_ProducerOrganisation1_idx` (`ProducerOrganisation_Id` ASC) ,
  UNIQUE INDEX `uq_ProducerProductUpload_ProducerOrganisationBatchNo_idx` (`ProducerOrganisation_Id` ASC, `BatchNo` ASC) ,
  CONSTRAINT `fk_ProducerProductUpload_ProducerProduct1`
    FOREIGN KEY (`ProducerProduct_Id`)
    REFERENCES `ProOrg`.`ProducerProduct` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProducerProductUpload_ProducerOrganisation1`
    FOREIGN KEY (`ProducerOrganisation_Id`)
    REFERENCES `ProOrg`.`ProducerOrganisation` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ProOrg`.`ProducerProductSale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`ProducerProductSale` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ProducerOrganisation_Id` INT NOT NULL,
  `BillNumber` VARCHAR(45) NOT NULL,
  `ProducerProductUpload_Id` INT NOT NULL,
  `Quantity` INT NOT NULL,
  `SoldTime` DATETIME NOT NULL,
  `SubTotal` DOUBLE NOT NULL,
  `CGST` DOUBLE NOT NULL,
  `SGST` DOUBLE NOT NULL,
  `GrandTotal` DOUBLE NOT NULL,
  `IsActive` TINYINT(1) NOT NULL DEFAULT 1,
  INDEX `fk_ProducerProductSale_ProducerProductUpload1_idx` (`ProducerProductUpload_Id` ASC) ,
  PRIMARY KEY (`Id`),
  INDEX `fk_ProducerProductSale_ProducerOrganisation1_idx` (`ProducerOrganisation_Id` ASC) ,
  UNIQUE INDEX `uq_ProducerProductSale_ProducerOrganisationBillNo_idx` (`ProducerOrganisation_Id` ASC, `BillNumber` ASC) ,
  CONSTRAINT `fk_ProducerProductSale_ProducerProductUpload1`
    FOREIGN KEY (`ProducerProductUpload_Id`)
    REFERENCES `ProOrg`.`ProducerProductUpload` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProducerProductSale_ProducerOrganisation1`
    FOREIGN KEY (`ProducerOrganisation_Id`)
    REFERENCES `ProOrg`.`ProducerOrganisation` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ProOrg`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`User` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ProducerOrganisation_Id` INT NOT NULL,
  `LoginName` VARCHAR(100) NOT NULL,
  `LoginPassword` VARCHAR(45) NOT NULL,
  `UserRole` VARCHAR(45) NOT NULL,
  `FirstName` VARCHAR(100) NOT NULL,
  `LastName` VARCHAR(100) NULL,
  `PrimaryMobile` VARCHAR(10) NOT NULL,
  `SecondaryMobile` VARCHAR(10) NULL,
  `Email` VARCHAR(100) NOT NULL,
  `IsActive` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`Id`),
  INDEX `fk_User_ProducerOrganisation1_idx` (`ProducerOrganisation_Id` ASC) ,
  UNIQUE INDEX `uq_User_ProducerOrganisationLoginName_idx` (`ProducerOrganisation_Id` ASC, `LoginName` ASC) ,
  UNIQUE INDEX `uq_User_ProducerOrganisationPrimaryMobile_idx` (`ProducerOrganisation_Id` ASC, `PrimaryMobile` ASC) ,
  UNIQUE INDEX `uq_User_ProducerOrganisationEmail_idx` (`ProducerOrganisation_Id` ASC, `Email` ASC) ,
  CONSTRAINT `fk_User_ProducerOrganisation1`
    FOREIGN KEY (`ProducerOrganisation_Id`)
    REFERENCES `ProOrg`.`ProducerOrganisation` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ProOrg`.`LoginSession`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`LoginSession` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `User_Id` INT NOT NULL,
  `LoginTime` DATETIME NOT NULL,
  `SessionToken` CHAR(36) NULL,
  `SessionStatus` VARCHAR(45) NOT NULL,
  `LogoutTime` VARCHAR(45) NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_LoginSession_User1_idx` (`User_Id` ASC) ,
  CONSTRAINT `fk_LoginSession_User1`
    FOREIGN KEY (`User_Id`)
    REFERENCES `ProOrg`.`User` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ProOrg`.`ProductSection`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`ProductSection` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ProducerOrganisation_Id` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_ProductSection_ProducerOrganisation1_idx` (`ProducerOrganisation_Id` ASC) ,
  UNIQUE INDEX `uq_ProductSection_ProducerOrganisationName_idx` (`ProducerOrganisation_Id` ASC, `Name` ASC) ,
  CONSTRAINT `fk_ProductSection_ProducerOrganisation1`
    FOREIGN KEY (`ProducerOrganisation_Id`)
    REFERENCES `ProOrg`.`ProducerOrganisation` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ProOrg`.`ProductCategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`ProductCategory` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ProductSection_Id` INT NOT NULL,
  `Category` VARCHAR(45) NOT NULL,
  `SubCategory` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_ProductCategory_ProductSection1_idx` (`ProductSection_Id` ASC) ,
  UNIQUE INDEX `uq_ProductCategory_ProductSectionCategorySubCategory_idx` (`ProductSection_Id` ASC, `Category` ASC, `SubCategory` ASC) ,
  CONSTRAINT `fk_ProductCategory_ProductSection1`
    FOREIGN KEY (`ProductSection_Id`)
    REFERENCES `ProOrg`.`ProductSection` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ProOrg`.`ProductProductCategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProOrg`.`ProductProductCategory` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Product_Id` INT NOT NULL,
  `ProductCategory_Id` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_ProductProductCategory_Product1_idx` (`Product_Id` ASC) ,
  INDEX `fk_ProductProductCategory_ProductCategory1_idx` (`ProductCategory_Id` ASC) ,
  CONSTRAINT `fk_ProductProductCategory_Product1`
    FOREIGN KEY (`Product_Id`)
    REFERENCES `ProOrg`.`Product` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProductProductCategory_ProductCategory1`
    FOREIGN KEY (`ProductCategory_Id`)
    REFERENCES `ProOrg`.`ProductCategory` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
