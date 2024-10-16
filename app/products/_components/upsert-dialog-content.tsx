"use client";

import { Loader2Icon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";

import { Button } from "@/app/_components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/_components/ui/dialog";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
  upsertProductSchema,
  UpsertProductSchema,
} from "@/app/_actions/product/upsert-product/schema";
import { upsertProduct } from "@/app/_actions/product/upsert-product";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { Dispatch, SetStateAction } from "react";

interface UpsertProductDialogContentProps {
  defaultValues?: UpsertProductSchema;
  setDialogIsOpen: Dispatch<SetStateAction<boolean>>;
}

const UpsertProductDialogContent = ({
  defaultValues,
  setDialogIsOpen,
}: UpsertProductDialogContentProps) => {
  const { execute: executeUpsertProduct } = useAction(upsertProduct, {
    onSuccess: () => {
      toast.success("Produto salvo com sucesso.");
      setDialogIsOpen(false);
    },
    onError: () => {
      toast.error("Ocorreu um erro ao salvar um produto.");
    },
  });

  const form = useForm<UpsertProductSchema>({
    shouldUnregister: true,
    resolver: zodResolver(upsertProductSchema),
    defaultValues: defaultValues ?? {
      name: "",
      price: 0,
      stock: 1,
    },
  });

  const onSubmit = (data: UpsertProductSchema) => {
    executeUpsertProduct({ ...data, id: defaultValues?.id });
  };

  const isEditing = !!defaultValues;

  return (
    <DialogContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Editar" : "Criar"} produto</DialogTitle>
            <DialogDescription>Insira as informações abaixo</DialogDescription>
          </DialogHeader>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço</FormLabel>
                <FormControl>
                  <NumericFormat
                    thousandSeparator="."
                    decimalSeparator=","
                    fixedDecimalScale
                    decimalScale={2}
                    prefix="R$"
                    allowNegative={false}
                    customInput={Input}
                    onValueChange={(values) =>
                      field.onChange(values.floatValue)
                    }
                    {...field}
                    onChange={() => {}}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estoque</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Digite o Estoque  do produto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" type="reset">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <Loader2Icon className="animate-spin" size={18} />
              ) : (
                "Salvar"
              )}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default UpsertProductDialogContent;
