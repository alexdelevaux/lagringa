use proyecto;

-- Eliminar el idRubro de la tabla Productos

ALTER TABLE `proyecto`.`productos` 
DROP FOREIGN KEY `fk_idRubro`;
ALTER TABLE `proyecto`.`productos` 
DROP COLUMN `idRubro`,
DROP INDEX `idx_fk_idRubro` ;

-- Hacer TIMESTAMP la fecha de actualización en los productos


ALTER TABLE `proyecto`.`productos` 
CHANGE COLUMN `fechaActualizacion` `fechaActualizacion` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ;

-- Productos

INSERT INTO `proyecto`.`productos` (`producto`, `estado`, `precioVenta`, `observaciones`) VALUES ('Jugo naranja \"Celiacos\"', 'A', '120', '......');
INSERT INTO `proyecto`.`productos` (`producto`, `estado`, `precioVenta`, `observaciones`) VALUES ('Jugo naranja \"Celiacos\" x 2L', 'A', '200', '2 Litros');
INSERT INTO `proyecto`.`productos` (`producto`, `estado`, `precioVenta`, `observaciones`) VALUES ('Cereales ricos', 'A', '58', 'Muy ricos');
INSERT INTO `proyecto`.`productos` (`producto`, `estado`, `precioVenta`, `observaciones`) VALUES ('Chizitos \"Los chizitos locos\"', 'I', '30', 'Buenísimos');

-- Proveedores

ALTER TABLE `proyecto`.`proveedores` 
CHANGE COLUMN `idProveedor` `idProveedor` INT(11) NOT NULL AUTO_INCREMENT ;

INSERT INTO `proyecto`.`proveedores` (`razonSocial`, `CUIT`, `telefono`, `direccion`, `estado`, `observaciones`) VALUES ('EVSA', '1023012', '4312849', 'Crisóstomo 264', 'A', 'Electrónica y otros');
INSERT INTO `proyecto`.`proveedores` (`razonSocial`, `CUIT`, `telefono`, `direccion`, `estado`, `observaciones`) VALUES ('Bolivia Cereales', '142941', '4248149', 'Bolivia 505', 'A', 'Muy buenos');
INSERT INTO `proyecto`.`proveedores` (`razonSocial`, `CUIT`, `telefono`, `direccion`, `estado`, `observaciones`) VALUES ('Juan Lopez', '9149129', '4129912', 'Av. Aconquija 512', 'A', '.--.-');



-- Empleados

INSERT INTO empleados VALUES (1, 'Lourdes', 'Alvarez', 'lulialv', 'psqlulialv', 'v', 'a', null);
INSERT INTO empleados VALUES (1, 'Alfredo', 'Alvarez', 'lulialv', 'psqlulialv', 'v', 'a', null);
INSERT INTO empleados VALUES (1, 'Magdalena', 'Sanchez', 'maguisan', 'psqlulialv', 'v', 'a', null);

-- Rubros

INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Orgánico');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Sin TACC');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Sin azúcar');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Vegano');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Semillas');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Frutos secos');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Cereales');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Harinas');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Legumbres');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Condimentos');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Naturales');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Light');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Alimento Balanceado');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Refrigerados');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Proteínas');
INSERT INTO `proyecto`.`rubros` (`rubro`) VALUES ('Snacks');

