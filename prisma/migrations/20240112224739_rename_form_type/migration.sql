/*
  Warnings:

  - The values [SLIDER] on the enum `FormType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FormType_new" AS ENUM ('SHORT', 'LONG', 'SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'DROPDOWN', 'LINEAR_SCALE', 'DATE');
ALTER TABLE "FormItem" ALTER COLUMN "type" TYPE "FormType_new" USING ("type"::text::"FormType_new");
ALTER TYPE "FormType" RENAME TO "FormType_old";
ALTER TYPE "FormType_new" RENAME TO "FormType";
DROP TYPE "FormType_old";
COMMIT;
