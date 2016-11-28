/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 726 A�o de creaci�n de pregunta: 2016
 questions[0]= "1)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[0]= new Array();
 choices[0][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[0][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[0][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[0][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[0] = choices[0][1];
 units[0] = "34, 84";
 comments[0] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 607 A�o de creaci�n de pregunta: 2016
 questions[1]= "2)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[1][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[1][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[1][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[1] = choices[1][2];
 units[1] = "101";
 comments[1] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 608 A�o de creaci�n de pregunta: 2016
 questions[2]= "3)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[2]= new Array();
 choices[2][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[2][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[2][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[2][3] = "Todas las respuestas son correctas.";
 answers[2] = choices[2][1];
 units[2] = "101";
 comments[2] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 5 A�o de creaci�n de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[3]= new Array();
 choices[3][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[3][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[3][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[3][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[3] = choices[3][1];
 units[3] = "101";
 comments[3] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 60 A�o de creaci�n de pregunta: 2016
 questions[4]= "5)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[4]= new Array();
 choices[4][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[4][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[4][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[4][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[4] = choices[4][2];
 units[4] = "101";
 comments[4] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 71 A�o de creaci�n de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[5]= new Array();
 choices[5][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[5][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[5][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[5][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[5] = choices[5][0];
 units[5] = "86";
 comments[5] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 627 A�o de creaci�n de pregunta: 2016
 questions[6]= "7)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[6]= new Array();
 choices[6][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[6][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[6][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[6][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[6] = choices[6][2];
 units[6] = "89";
 comments[6] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 3 A�o de creaci�n de pregunta: 2016
 questions[7]= "8)  En el lenguaje de modelado UML :";
 choices[7]= new Array();
 choices[7][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[7][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[7][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[7][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[7] = choices[7][2];
 units[7] = "89";
 comments[7] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 648 A�o de creaci�n de pregunta: 2016
 questions[8]= "9)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[8]= new Array();
 choices[8][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[8][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[8][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[8][3] = "Todas las respuestas son correctas.";
 answers[8] = choices[8][0];
 units[8] = "101";
 comments[8] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 57 A�o de creaci�n de pregunta: 2016
 questions[9]= "10)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[9]= new Array();
 choices[9][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[9][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[9][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[9][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[9] = choices[9][3];
 units[9] = "101";
 comments[9] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 699 A�o de creaci�n de pregunta: 2016
 questions[10]= "11)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[10]= new Array();
 choices[10][0] = "Est&aacute; desarrollado en Java.";
 choices[10][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[10][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[10][3] = "Todas las afirmaciones son correctas.";
 answers[10] = choices[10][2];
 units[10] = "92";
 comments[10] = "Id Pregunta: 699. INTEGRACION CONTINUA";


//  Id pregunta: 716 A�o de creaci�n de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[11]= new Array();
 choices[11][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[11][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[11][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[11][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[11] = choices[11][1];
 units[11] = "92";
 comments[11] = "Id Pregunta: 716. INTEGRACION CONTINUA";


//  Id pregunta: 52 A�o de creaci�n de pregunta: 2016
 questions[12]= "13)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[12]= new Array();
 choices[12][0] = "ISO/IEC 25000";
 choices[12][1] = "ISO/IEC 27000";
 choices[12][2] = "ISO 9000";
 choices[12][3] = "ISO 9001";
 answers[12] = choices[12][0];
 units[12] = "93";
 comments[12] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 53 A�o de creaci�n de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[13]= new Array();
 choices[13][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[13][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[13][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[13][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[13] = choices[13][1];
 units[13] = "84";
 comments[13] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 14 A�o de creaci�n de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la respuesta correcta:";
 choices[14]= new Array();
 choices[14][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[14][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[14][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[14][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[14] = choices[14][1];
 units[14] = "98";
 comments[14] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 606 A�o de creaci�n de pregunta: 2016
 questions[15]= "16)  ITIL v3, define:";
 choices[15]= new Array();
 choices[15][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[15][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[15][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[15][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[15] = choices[15][0];
 units[15] = "101";
 comments[15] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 59 A�o de creaci�n de pregunta: 2016
 questions[16]= "17)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[16]= new Array();
 choices[16][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[16][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[16][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[16][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[16] = choices[16][3];
 units[16] = "101";
 comments[16] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 72 A�o de creaci�n de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[17]= new Array();
 choices[17][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[17][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[17][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[17][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[17] = choices[17][1];
 units[17] = "86";
 comments[17] = "Id Pregunta: 72. AGE A1 2015";


//  Id pregunta: 725 A�o de creaci�n de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[18]= new Array();
 choices[18][0] = "Se dejan listos los entornos de desarrollo";
 choices[18][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[18][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[18][3] = "Todas las anteriores son correctas";
 answers[18] = choices[18][3];
 units[18] = "34, 84";
 comments[18] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 9 A�o de creaci�n de pregunta: 2016
 questions[19]= "20)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[19]= new Array();
 choices[19][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[19][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[19][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[19][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[19] = choices[19][1];
 units[19] = "95";
 comments[19] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 704 A�o de creaci�n de pregunta: 2016
 questions[20]= "21)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[20]= new Array();
 choices[20][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[20][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[20][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[20][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[20] = choices[20][1];
 units[20] = "92";
 comments[20] = "Id Pregunta: 704. INTEGRACION CONTINUA";


//  Id pregunta: 56 A�o de creaci�n de pregunta: 2016
 questions[21]= "22)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[21][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[21][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[21][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[21] = choices[21][2];
 units[21] = "83";
 comments[21] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 728 A�o de creaci�n de pregunta: 2016
 questions[22]= "23)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[22]= new Array();
 choices[22][0] = "De 1a  4 ";
 choices[22][1] = "De 3 a  7 ";
 choices[22][2] = "De 5 a  9";
 choices[22][3] = "De 7 a 11";
 answers[22] = choices[22][2];
 units[22] = "34, 84";
 comments[22] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 644 A�o de creaci�n de pregunta: 2016
 questions[23]= "24)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[23]= new Array();
 choices[23][0] = "Dise&ntilde;o del servicio.";
 choices[23][1] = "Transici&oacute;n del servicio.";
 choices[23][2] = "Estrategia del servicio.";
 choices[23][3] = "Operaci&oacute;n del servicio.";
 answers[23] = choices[23][2];
 units[23] = "101";
 comments[23] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 91 A�o de creaci�n de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[24]= new Array();
 choices[24][0] = "JUnit, Artifactory y SonarQube";
 choices[24][1] = "JUnit, Artifactory y Selenium";
 choices[24][2] = "JUnit, SonarQube y Selenium";
 choices[24][3] = "ArtiFactory, SonarQube y Selenium";
 answers[24] = choices[24][2];
 units[24] = "92";
 comments[24] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 696 A�o de creaci�n de pregunta: 2016
 questions[25]= "26)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[25]= new Array();
 choices[25][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[25][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[25][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[25][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[25] = choices[25][0];
 units[25] = "92";
 comments[25] = "Id Pregunta: 696. INTEGRACION CONTINUA";


//  Id pregunta: 42 A�o de creaci�n de pregunta: 2016
 questions[26]= "27)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[26]= new Array();
 choices[26][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[26][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[26][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[26][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[26] = choices[26][3];
 units[26] = "86";
 comments[26] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 700 A�o de creaci�n de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; es SonarQube?";
 choices[27]= new Array();
 choices[27][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[27][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[27][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[27][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[27] = choices[27][2];
 units[27] = "92";
 comments[27] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 649 A�o de creaci�n de pregunta: 2016
 questions[28]= "29)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[28]= new Array();
 choices[28][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[28][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[28][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[28][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[28] = choices[28][0];
 units[28] = "101";
 comments[28] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 41 A�o de creaci�n de pregunta: 2016
 questions[29]= "30)  En cuanto al an&aacute;lisis DAFO:";
 choices[29]= new Array();
 choices[29][0] = "Considera detallada y exclusivamente factores internos.";
 choices[29][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[29][2] = "Considera detallada y exclusivamente factores externos.";
 choices[29][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[29] = choices[29][1];
 units[29] = "83";
 comments[29] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 729 A�o de creaci�n de pregunta: 2016
 questions[30]= "31)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[30]= new Array();
 choices[30][0] = "Backlog refinement";
 choices[30][1] = "Backlog refinement";
 choices[30][2] = "A y b son correctas";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = choices[30][2];
 units[30] = "34, 84";
 comments[30] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 724 A�o de creaci�n de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[31]= new Array();
 choices[31][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[31][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[31][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[31][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[31] = choices[31][3];
 units[31] = "34, 84";
 comments[31] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 636 A�o de creaci�n de pregunta: 2016
 questions[32]= "33)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[32]= new Array();
 choices[32][0] = "El nombre y el tipo de correspondencia.";
 choices[32][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[32][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[32][3] = "El nombre y el grado.";
 answers[32] = choices[32][1];
 units[32] = "85";
 comments[32] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 717 A�o de creaci�n de pregunta: 2016
 questions[33]= "34)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[33]= new Array();
 choices[33][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[33][1] = "Anteriormente se denominaba Sonar.";
 choices[33][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[33][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[33] = choices[33][2];
 units[33] = "92";
 comments[33] = "Id Pregunta: 717. INTEGRACION CONTINUA";


//  Id pregunta: 731 A�o de creaci�n de pregunta: 2016
 questions[34]= "35)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[34]= new Array();
 choices[34][0] = "Burn-up chart";
 choices[34][1] = "Arquitectural Skype";
 choices[34][2] = "Burn-down chart";
 choices[34][3] = "Definition of done";
 answers[34] = choices[34][1];
 units[34] = "34, 84";
 comments[34] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 701 A�o de creaci�n de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[35]= new Array();
 choices[35][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[35][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[35][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[35][3] = "Ninguna de las anteriores.";
 answers[35] = choices[35][1];
 units[35] = "92";
 comments[35] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 715 A�o de creaci�n de pregunta: 2016
 questions[36]= "37)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[36]= new Array();
 choices[36][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[36][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[36][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[36][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[36] = choices[36][1];
 units[36] = "92";
 comments[36] = "Id Pregunta: 715. INTEGRACION CONTINUA";


//  Id pregunta: 703 A�o de creaci�n de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[37]= new Array();
 choices[37][0] = "Selenium";
 choices[37][1] = "JUnit";
 choices[37][2] = "Jenkins";
 choices[37][3] = "JMeter";
 answers[37] = choices[37][2];
 units[37] = "92";
 comments[37] = "Id Pregunta: 703. INTEGRACION CONTINUA";


//  Id pregunta: 619 A�o de creaci�n de pregunta: 2016
 questions[38]= "39)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[38]= new Array();
 choices[38][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[38][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[38][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[38][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[38] = choices[38][0];
 units[38] = "84";
 comments[38] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 620 A�o de creaci�n de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[39]= new Array();
 choices[39][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[39][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[39][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[39][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[39] = choices[39][2];
 units[39] = "85";
 comments[39] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 695 A�o de creaci�n de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[40]= new Array();
 choices[40][0] = "Jenkins";
 choices[40][1] = "Hudson";
 choices[40][2] = "SonarQube";
 choices[40][3] = "Todas lo son";
 answers[40] = choices[40][3];
 units[40] = "92";
 comments[40] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 702 A�o de creaci�n de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[41]= new Array();
 choices[41][0] = "CVS";
 choices[41][1] = "SVN";
 choices[41][2] = "Team Foundation Server";
 choices[41][3] = "Apache Tomcat";
 answers[41] = choices[41][3];
 units[41] = "92";
 comments[41] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 698 A�o de creaci�n de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[42]= new Array();
 choices[42][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[42][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[42][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[42][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[42] = choices[42][1];
 units[42] = "92";
 comments[42] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 272 A�o de creaci�n de pregunta: 2016
 questions[43]= "44)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[43]= new Array();
 choices[43][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[43][1] = "Anteriormente se denominaba Sonar.";
 choices[43][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[43][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[43] = choices[43][2];
 units[43] = "92";
 comments[43] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 621 A�o de creaci�n de pregunta: 2016
 questions[44]= "45)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[44]= new Array();
 choices[44][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[44][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[44][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[44][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[44] = choices[44][1];
 units[44] = "89";
 comments[44] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 623 A�o de creaci�n de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[45]= new Array();
 choices[45][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[45][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[45][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[45][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[45] = choices[45][0];
 units[45] = "89";
 comments[45] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 723 A�o de creaci�n de pregunta: 2016
 questions[46]= "47)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[46]= new Array();
 choices[46][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[46][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[46][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = choices[46][1];
 units[46] = "34, 84";
 comments[46] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 727 A�o de creaci�n de pregunta: 2016
 questions[47]= "48)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[47]= new Array();
 choices[47][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[47][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[47][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[47][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[47] = choices[47][0];
 units[47] = "34, 84";
 comments[47] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 40 A�o de creaci�n de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[48]= new Array();
 choices[48][0] = "Drupal";
 choices[48][1] = "Cassandra";
 choices[48][2] = "Wordpress";
 choices[48][3] = "OpenCMS";
 answers[48] = choices[48][1];
 units[48] = "99";
 comments[48] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 733 A�o de creaci�n de pregunta: 2016
 questions[49]= "50)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[49]= new Array();
 choices[49][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[49][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[49][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[49][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[49] = choices[49][3];
 units[49] = "34, 84";
 comments[49] = "Id Pregunta: 733. Metodologias &aacute;giles";


//  Id pregunta: 697 A�o de creaci�n de pregunta: 2016
 questions[50]= "51)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[50]= new Array();
 choices[50][0] = "Programaci&oacute;n estructurada.";
 choices[50][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[50][2] = "Programaci&oacute;n extrema.";
 choices[50][3] = "Programaci&oacute;n Espuria.";
 answers[50] = choices[50][2];
 units[50] = "92";
 comments[50] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 88 A�o de creaci�n de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "Diagrama de clases";
 choices[51][1] = "Diagrama de componentes";
 choices[51][2] = "Diagrama de estructura";
 choices[51][3] = "Diagrama de paquetes";
 answers[51] = choices[51][0];
 units[51] = "91";
 comments[51] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 645 A�o de creaci�n de pregunta: 2016
 questions[52]= "53)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[52]= new Array();
 choices[52][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[52][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[52][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[52][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[52] = choices[52][2];
 units[52] = "85";
 comments[52] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 21 A�o de creaci�n de pregunta: 2016
 questions[53]= "54)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[53]= new Array();
 choices[53][0] = "Gesti&oacute;n de la disponibilidad";
 choices[53][1] = "Gesti&oacute;n de la demanda";
 choices[53][2] = "Gesti&oacute;n de entregas";
 choices[53][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[53] = choices[53][0];
 units[53] = "101";
 comments[53] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 732 A�o de creaci�n de pregunta: 2016
 questions[54]= "55)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[54]= new Array();
 choices[54][0] = "Se definen iteraciones";
 choices[54][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[54][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[54][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[54] = choices[54][1];
 units[54] = "34, 84";
 comments[54] = "Id Pregunta: 732. Metodologias &aacute;giles";


//  Id pregunta: 6 A�o de creaci�n de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[55]= new Array();
 choices[55][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[55][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[55][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[55][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[55] = choices[55][0];
 units[55] = "91";
 comments[55] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 605 A�o de creaci�n de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[56]= new Array();
 choices[56][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[56][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[56][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[56][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[56] = choices[56][3];
 units[56] = "101";
 comments[56] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


//  Id pregunta: 730 A�o de creaci�n de pregunta: 2016
 questions[57]= "58)  Indica la respuesta correcta";
 choices[57]= new Array();
 choices[57][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[57][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[57][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[57][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[57] = choices[57][0];
 units[57] = "34, 84";
 comments[57] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 273 A�o de creaci�n de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[58]= new Array();
 choices[58][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[58][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[58][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[58][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[58] = choices[58][1];
 units[58] = "92";
 comments[58] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 576 A�o de creaci�n de pregunta: 2016
 questions[59]= "60)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[59]= new Array();
 choices[59][0] = "Mercurial, Git y Apache Subversion.";
 choices[59][1] = "Gimp, Mercurial y Git.";
 choices[59][2] = "RedMine, Planner y OpenProj.";
 choices[59][3] = "Cassandra, Git y REDIS.";
 answers[59] = choices[59][0];
 units[59] = "92";
 comments[59] = "Id Pregunta: 576. Tema 92. TAI 2016.";


//  Id pregunta: 95 A�o de creaci�n de pregunta: 2016
 questions[60]= "61)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[60]= new Array();
 choices[60][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[60][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[60][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[60][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[60] = choices[60][3];
 units[60] = "89";
 comments[60] = "Id Pregunta: 95. AGE A1 2015";


